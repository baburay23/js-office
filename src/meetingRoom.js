'use strict';
class MeetingRoom {
constructor() {
this.occupied = false;
this.roomBooked = true;
this.setName = this.setName;
}

roomName(name){
  this.setName = name;
   return this.setName;
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
if(this.roomBooked === true && this.occupied === true){
  throw new Error("Room is already booked")
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
