import { AfterViewInit, Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart" (chartClick)="chartPieSelected($event)"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  @Input() data:any={};
  @Output() chartClick = new EventEmitter();
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight, '#0A6A9E','#0A6A9E','#B82DB5','#30F9EF','#A3A481','#EE6B5E','#B3ACAB','#06AEC0'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
//          bottom: 'bottom',
          data: ['Retirement', 'Education savings', 'Health Savings', 'Buy a home', 'Loan payment','Buy a car'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: [
              { value: 4, name: 'Retirement' },
              { value: 6, name: 'Education savings' },
              { value: 3, name: 'Health Savings' },
              { value: 4, name: 'Buy a home' },
              { value: 6, name: 'Loan payment' },
              { value: 6, name: 'Buy a car' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              show: false
            },
            labelLine: {
              show: false,
           
            },
          },
        ],
      };
    });

    this.options.legend.data=this.data.label;
    this.options.legend[this.data.align]=this.data.align;
    if(this.data.radius){
      this.options.series[0].radius = this.data.radius;
    }
    //this.options.legend.position= 'right';
    this.options.series[0].data=this.data.data;

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  chartPieSelected($event){
    this.chartClick.emit($event);
  }
}
