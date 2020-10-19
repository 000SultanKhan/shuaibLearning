import { Component, OnInit, Inject } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notice: any;

  images = [
    '../../../assets/images/home/infrastructure.jpg',
    '../../../assets/images/home/scholership.jpeg'
  ];

  imgText = [
    'The ACE campus spreads over 20 acres of land in a beautiful and serene atmosphere ideally suited for technical education. The infrastructure and facilities available on campus are amongst the very best. Come, see it to believe it.',
    'Alpine college assists students to get upto 99% of scholarship for their enrolled courses.',
    'Alpine College of Education Saharanpur Road, Jalalabad, Shamli, Muzaffarnagar (ACESR) located at - Muzaffarnagar Uttar Pradesh is one of the popular colleges in the state. The College has been rated by 39 people on iCBSE.',
  ];

  constructor(
    public share: SharedService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Popup, {
      height: '570px',
      width: '415px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'app-popup',
  templateUrl: 'popup.html',
})
export class Popup {

  popupImages = [
    '../../../assets/images/popup/popup_1.jpeg'
  ];

  constructor(
    public dialogRef: MatDialogRef<Popup>,
    @Inject(MAT_DIALOG_DATA) public data: Popup) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.adaeda();
  }


  adaeda() {

    this.allAnagrams('silent')
    let string = "sultan is my name"
    alert('string  :' + JSON.stringify(this.allAnagrams('silent')))


    this.reverseString(string)
    alert(this.reverseString(string))

    let bbc = this.sumPrimes(10);
     alert('string  :' + JSON.stringify(bbc) )

     var t = [-1,-2,-3,5,6,1]
    var positiveArr = [];
    var negativeArr = [];


t.forEach(element => {
 

    if(element<0){
      negativeArr.push(element)
    }else{
      positiveArr.push(element)
    }

 alert(positiveArr) // output [5, 6, 1]
     alert(negativeArr) // output [-1, -2, -3]

    
  
  
  
  
});

  }








  reverseString(str) {

    //return str ? this.reverseString(str.substr(1)) + str[0] : str;
    return str? this.reverseString(str.substr(1)) + str[0] :str  };

  

   sumPrimes(num) {
    var sumArr= [];
    for(var i=0;i<=num;i++){
      if(this.isPrime(i))
        sumArr.push(i);
    }
  
    sumArr = sumArr.reduce(function(a,b){
      return a+b;
    })
  
    return sumArr;
  }
  

   isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++) {
          if(num%i === 0)
              return false;
      }
      return true;
  }

  //first we check that the number is prime or not 


  

   allAnagrams (word) {
    if (word.length < 2) {
      return [word];
    } else {
        var allAnswers = [];
        for (var i = 0; i < word.length; i++) {
          var letter = word[i];
          var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
          var shortwordArray = this.allAnagrams(shorterWord);
          for (var j = 0; j < shortwordArray.length; j++) {
            allAnswers.push(letter + shortwordArray[j]);
          }
        }
        return allAnswers;
    }
  }







}
