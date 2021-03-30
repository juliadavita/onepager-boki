import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
// property - type - waarde 
  test : string = 'Hello world'
  display : boolean = true
  array : string[] = []
  members : Member[] = [{
    name: 'Thijs', 
    education: 'CMGT',
    image: 'src'}] // export type v
  

  constructor() { }

  ngOnInit(): void {
    this.array.push('hello')
    this.array.push('world')
    this.array.push('3rd')
    this.members.push()
  }

  toTeam(){
    document.getElementById("team").scrollIntoView({behavior:"smooth"});
  }

  toProduct(){
    document.getElementById("loki").scrollIntoView({behavior:"smooth"});
  }

  // Functie en die geeft geen waarde terug (void)
  onClick(): void{
    this.test='Checking'
  }

  // getName(): string{
  //   return 'Hoi '
  // }
}

// { = object 
export type Member = {
  name : string,
  education : string,
  image : string
}


