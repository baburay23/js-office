'use strict';
class MeetingRoom {
constructor() {
this.occupied = false;
this.roomBooked = false;
}

full(){
 this.occupied = true;
 return this.occupied;
}
empty(){
 this.occupied = false;
 return this.occupied;

}
enterRoom(){
if(this.roomBooked === false && this.occupied === true){
  return("Room is already booked");
}
this.roomBooked === false;
  return(this.occupied = true)
}


exitRoom(){
  this.occupied= false;
return this.occupied;
}
isRoomBooked(){
this.occupied;
  return this.occupied;
}

}
