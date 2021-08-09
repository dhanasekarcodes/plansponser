import { AfterViewInit, Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  @Input() data:any={};
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
          left: 'left',
          data: ['Retirement', 'Education savings', 'Health Savings', 'Buy a home', 'Loan payment','Buy a car'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Goals',
            type: 'pie',
            radius: '80%',
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
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });

    this.options.legend.data=this.data.label;
    this.options.series[0].data=this.data.data;
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
