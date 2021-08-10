import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { phData, phFullData } from '../../models/plan-sponser-data';

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit, AfterViewInit {
  phid: number = 0;
  data:any={};
  data1:any={}; 
  pieData:any={};
  pieData1:any={};
  phDataOnj = phData;
  phFullDataOnj = phFullData;
  phName:string= "";
  productList: Array<any>=[];
  invesmentTextList: Array<any>=[];
  goalList: Array<any>=[];
  investList:any =  [];
  investSelectedList:any =  [];
  phSelectedObject:any;
  chartShow:boolean;
  selectedItem:any;
  @ViewChild('myname') selectEle; 

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.phid = params["id"];
    });
  }

  ngOnInit(): void {
    this.phName = this.phDataOnj[this.phid].name;
    this.loadStaticData();
    //load goalList
    let phObject = this.phDataOnj[this.phid];
    this.phSelectedObject = this.phFullDataOnj[this.phid];
    //console.log("phFullObject:",this.phSelectedObject.goals["Travel"].products);
    //init this.goalList structure
    let goalListObject =[];
   

    Object.keys(this.phSelectedObject.goals).forEach(item => {
      let goalListObj = {
        goalName:"",
        products:[],
        selectedInvest:[]
      };
      goalListObj.goalName = item;
      goalListObj.products = this.phSelectedObject.goals[item].products;
      this.goalList.push(goalListObj);
    });

    this.investList = ["Vanguard Institutional Index Fund Institutional (VINIX)","Vanguard Total International Stock Index Fund Institutional (VTSNX)",
                        "ALIBABA LTD ADR ISIN#US01609W1027 (BABA)",
                        "Money Market Fund (MMF000001)"];


    
  }

  ngAfterViewInit(){
    console.log("---------view--->",this.selectEle);
  }

  onSubmit(){
    this.router.navigateByUrl('/pages/participant-list');
  }

  onClick(goal){
    this.goalList.forEach( (item1, index) => {
      if(item1.goalName === goal) this.goalList.splice(index,1);
    });
  }

  onChange(event){
    console.log("***********::",event);
  }

  investClick(data, goalname){
    console.log("*****data******::",data);
    //let obj;
    this.goalList.forEach( (item, index) => {
      if(item.goalName === goalname){
        //obj=item;

        //this.goalList.splice(index,1);
        if(data.selected){
          item.selectedInvest.push(data.value);
          this.invesmentTextList.push(data.value);
        }else{
          item.selectedInvest.forEach( (item1, index) => {
            if(item1 === data.value) item.selectedInvest.splice(index,1);
          });
        }
      } 
    });
    
    this.loadChart();
   // this.goalList.push(obj);

    console.log("*****data list******::",this.goalList);
  }

  loadChart(){

    this.pieData = {
      label: ['Retirement', 'Education savings', 'Health Savings', 'Buy a home', 'Loan payment','Buy a car'],
      data: [
        { value: 4, name: 'Retirement' },
        { value: 6, name: 'Education savings' },
        { value: 3, name: 'Health Savings' },
        { value: 4, name: 'Buy a home' },
        { value: 6, name: 'Loan payment' },
        { value: 6, name: 'Buy a car' },
      ]
    };

    let listVal = [];
    this.goalList.forEach(item => {
        
      listVal = listVal.concat(item.selectedInvest);

    });
    this.pieData.label = [];
    this.pieData.data = [];
    console.log("Chart data",listVal);
    listVal.forEach(item => {
      console.log("{{{",this.pieData.label.filter(el => el == item).length);
      if(this.pieData.label.filter(el => el == item).length == 0){
        this.pieData.label.push(item);
        let count = listVal.filter(ele =>  ele == item);
        let obj = {
          name: "",
          value: 0
        };
        obj.name = item;
        obj.value = count.length;
        this.pieData.data.push(obj);
      }
      console.log("{{{---",this.pieData);
    });

    if(this.chartShow){
        this.chartShow = false;
    }else{
      this.chartShow = true;
    }

  }




















  chartPieSelected($event){
    console.log("Pie event parent--->", $event);
    //this.chartClick.emit($event);
  }














  loadStaticData(){
    this.data = {
      label:['age 25-35', 'age 35-45', 'age 45-50', 'age >50'],
      data:[4, 6, 3, 2],
      color: '#EE6B5E'
    };

    this.data1 = {
      label:['Salary 30k-40k', 'Salary 30k-40k', 'Salary 30k-40k', 'Salary 30k-40k'],
      data:[6, 3, 2, 2],
      color: '#30F9EF'
    };

    

    this.pieData1 = {
      label: ['Aggressive', 'Moderate', 'Conservative'],
      data: [
        { value: 4, name: 'Aggressive' },
        { value: 6, name: 'Moderate' },
        { value: 3, name: 'Conservative' }
      ]
    };

    this.pieData = {
      label: ['Retirement', 'Education savings', 'Health Savings', 'Buy a home', 'Loan payment','Buy a car'],
      data: [
        { value: 4, name: 'Retirement' },
        { value: 6, name: 'Education savings' },
        { value: 3, name: 'Health Savings' },
        { value: 4, name: 'Buy a home' },
        { value: 6, name: 'Loan payment' },
        { value: 6, name: 'Buy a car' },
      ]
    };

    let val = this.phDataOnj[this.phid];
    this.pieData.label = [];
    //this.pieData.label = this.phDataOnj[this.phid].shortterm.concat(this.phDataOnj[this.phid].longterm);
    this.pieData.data=[];
   /*
    this.pieData.data=[];
    this.pieData.label.forEach(element => {
      let ele = {
        name: '',
        value: 0
      };
      ele.name = element;
      ele.value = 1
      this.pieData.data.push(ele);
    });
    */
  }

}
