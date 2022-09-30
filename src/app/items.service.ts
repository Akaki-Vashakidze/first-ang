import { Injectable } from "@angular/core";
import { trip } from "./trips.model";
@Injectable({providedIn:'root'})


export class ItemsService {
    trips:trip[] = 
  [
    {
    title:'Batumi',
    title2: "Smith's family",
    img:'https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=',
    description:'cool trip and we have some rg fr wf re f df rewnqkdmq; ad ewd nn edsf wqsal fun',
    date:'29.01.2022'
  },
  {
    title:'Poti',
    title2: "Brotter's family",
    img:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg',
    description:'cool trip and we kterm er gfre f wef cd ter d ref ehave some funhb vjenf encwdknm',
    date:'29.01.2022'
  },
  {
    title:'Svaneti',
    title2: "Millson's family",
    img:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg',
    description:'untirw imron jnfewm rni jenfrwdo kwenm rjkfnwnr fwnmweomn fkjregnfwdmrenmwd krfmewdomornwe dkjn4fewdc re fjr ef ew fr we d ',
    date:'29.01.2022'
  
  },
  {
    title:'Batumi',
    title2: "Smith's family",
    img:'https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=',
    description:'cool trip and we have some rg fr wf re f df rewnqkdmq; ad ewd nn edsf wqsal fun',
    date:'29.01.2022'
  },
  {
    title:'Poti',
    title2: "Brotter's family",
    img:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg',
    description:'cool trip and we kterm er gfre f wef cd ter d ref ehave some funhb vjenf encwdknm',
    date:'29.01.2022'
  },
  {
    title:'Svaneti',
    title2: "Millson's family",
    img:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg',
    description:'untirw imron jnfewm rni jenfrwdo kwenm rjkfnwnr fwnmweomn fkjregnfwdmrenmwd krfmewdomornwe dkjn4fewdc re fjr ef ew fr we d ',
    date:'29.01.2022'
  
  }, {
    title:'Batumi',
    title2: "Smith's family",
    img:'https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=',
    description:'cool trip and we have some rg fr wf re f df rewnqkdmq; ad ewd nn edsf wqsal fun',
    date:'29.01.2022'
  },
  {
    title:'Poti',
    title2: "Brotter's family",
    img:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg',
    description:'cool trip and we kterm er gfre f wef cd ter d ref ehave some funhb vjenf encwdknm',
    date:'29.01.2022'
  },
  {
    title:'Svaneti',
    title2: "Millson's family",
    img:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg',
    description:'untirw imron jnfewm rni jenfrwdo kwenm rjkfnwnr fwnmweomn fkjregnfwdmrenmwd krfmewdomornwe dkjn4fewdc re fjr ef ew fr we d ',
    date:'29.01.2022'
  
  },
  {
    title:'Batumi',
    title2: "Smith's family",
    img:'https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=',
    description:'cool trip and we have some rg fr wf re f df rewnqkdmq; ad ewd nn edsf wqsal fun',
    date:'29.01.2022'
  },
  {
    title:'Poti',
    title2: "Brotter's family",
    img:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg',
    description:'cool trip and we kterm er gfre f wef cd ter d ref ehave some funhb vjenf encwdknm',
    date:'29.01.2022'
  },
  ]

  images:any = [
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
    {link:'https://i.pinimg.com/736x/e7/82/2c/e7822c4d45c3b4393012eecd470cec56.jpg'},
    {link:'https://st3.depositphotos.com/7742794/19059/i/1600/depositphotos_190591250-stock-photo-happy-family-travel-tourism-mountains.jpg'},
  ]

  zoomImgLink:string

  setZoomImgLink(link){
    this.zoomImgLink = link;
    console.log(this.zoomImgLink)
  }

}