import { generateForwardRef } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { JokeApiService } from '../service/joke-api.service';

@Component({
  selector: 'app-joke-generator',
  templateUrl: 'joke-generator.component.html',
  styleUrls: ['./joke-generator.component.css']
})
export class JokeGeneratorComponent implements OnInit {
  title = 'Dad-joke';
  jokeList: any[] = [];
  joke: any;
  constructor(private jokeapiservice: JokeApiService) {}

  ngOnInit() {
    this.jokeList = JSON.parse(<string>localStorage.getItem('joke' )) || [];
  }

  onGetJoke(joke: string): void {
  this.jokeapiservice.getDadJoke().subscribe(joke => {
    this.joke = joke
    console.log(joke)
  });
  console.log(joke)
  }

  onFavorite() {
    this.jokeList.push(this.joke)
    console.log(this.jokeList)
    localStorage.setItem('joke', JSON.stringify(this.jokeList));
  }

  // onDeleteJoke(id: string) {
  //   this.jokeList = this.jokeList.filter(j => {
  //     if (j.id === id) {
  //       return false;
  //     }
  //     return true;
  //   })

    // onDeleteJoke(id: string) {
    //   this.dadSrv.onClearJoke(id).subscribe(() => {
    //     this.fetchFavorites()

  // }
}
