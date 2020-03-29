'use strict';
//As an office manager
//So that staff can coordinate meetings
//I would like to add a meeting room to the office
describe('Office', function(){
  var office;
  var meetingRoom1;
  var meetingRoom2
beforeEach(function() {
  office = new Office();
  //  meetingRoom = new MeetingRoom();
});
it('can add rooms', function(){
  var room;
  this.rooms = [];
  //spyOn(this.rooms ,push());
  expect(office.addRoom(room)).toEqual(room);
});
//As an office manager
//o that I can manage meeting rooms
//I would like to list all the meeting rooms in the office
it('list all meeting rooms', function(){
  //"room1" = new MeetingRoom ();
  //"room2" = new MeetingRoom();
  //"room3" = new MeetingRoom();
  office.addRoom("room1");
  office.addRoom("room2");
  office.addRoom("room3");
  expect(office.allRooms()).toContain("room1" ,"room2","room3");
});
it('list all avail meetings', function(){
  meetingRoom1 = new MeetingRoom();
  meetingRoom2 = new MeetingRoom();
  meetingRoom1.enter_room
  office.addRoom(meetingRoom1);
  office.addRoom(meetingRoom2);
  expect(office.availRooms()).toContain(meetingRoom2);
});
});
