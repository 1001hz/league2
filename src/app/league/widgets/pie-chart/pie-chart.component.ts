import { Component, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent{
  items:Array<{name:string,count:number,color:string}>=[
    {name:'Remaining',count:25,color:'orange', opacity: 0.3},
    {name:'Gone',count:50,color:'orange', opacity: 1}
  ];
  private _total:number =0;

  constructor() {
    if(this.items.length>0)
    {
      this._total = this.items.map(a=>a.count).reduce((x,y)=>x+y);
    }
  }

  getOpacity(index) {
    return this.items[index].opacity;
  }

  getPerimeter(radius:number):number
  {
    return Math.PI*2*radius;
  }

  getColor(index:number):string
  {
    return this.items[index].color;
  }

  getOffset(radius:number,index:number):number
  {
    var percent=0;
    for(var i=0;i<index;i++)
    {
      percent+=((this.items[i].count)/this._total);
    }
    var perimeter = Math.PI*2*radius;
    return perimeter*percent;
  }
}
