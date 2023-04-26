import { Component, NgModule, NgModuleDecorator, NgModuleRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';

@Component({
  selector: 'mybuilder',
  template: `<div #dynamicComponentContainer></div>`,
})

export class MyBuilder {
  constructor(private http: HttpClient) { }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef | undefined;

  lastNativeElement:Element|undefined|null;
  CompName_to_Comp:{[key: string]: any}={};

  ngAfterViewInit(){
    const constructor:any =AppModule.prototype.constructor
    console.log(constructor.ɵmod.declarations);
    this.CompName_to_Comp = constructor.ɵmod.declarations.reduce((acc:any, cur: any,) => {
        acc[cur.name] = cur;
        return acc;
      }, {});
    this.lastNativeElement = this.container?.element.nativeElement
    this.http.get('/assets/data.json').subscribe(data => {
      this.loadComponent(data as MyJson);
    }, (error: any) => {
      console.error('Error loading /assets/data.json', error);
    });
  }

  loadComponent(json:MyJson) {
    console.log(json.data)
    json.data.forEach((elem)=>{
      console.log(elem)
      // check !isComponent
      if(elem.indexOf('<')>=0){
        this.lastNativeElement?.insertAdjacentHTML('afterend', elem);
        this.lastNativeElement =this.lastNativeElement?.nextElementSibling 
      }else{
        this.insertComponent(elem)
      }
    })
  }

  insertComponent(componentName : string){
    const comp =this.CompName_to_Comp[componentName]
    if(comp){
      const ref =this.container?.createComponent(comp)
        this.lastNativeElement = ref?.location.nativeElement
    }else{
      console.warn(`Unknown component: '${componentName}'`)
    }
  }
}
interface MyJson{
  data: Array<string>
}