'use strict';
//As a staff member
//In order to have meeting,
//I would like to check if the meeting room is available or not (true or false)
describe('MeetingRoom', function(){
  var meetingRoom;
  beforeEach(function() {
    meetingRoom = new MeetingRoom();
  });
  it('intially false', function() {
    expect(meetingRoom.occupied).toBe(false);
  });
  it('is booked', function(){
    //meetingRoom.occupied = false
   expect(meetingRoom.full()).toBe(true);
  });
  it ('is not booked', function(){
    expect(meetingRoom.empty()).toBe(false);
  });
  it('it becomes available when someone leaves', function(){
    expect(meetingRoom.exitRoom()).toBe(false);
  });
  it('shows if room is booked', function(){
    meetingRoom.enterRoom();
    expect(meetingRoom.isRoomBooked()).toBe(true);
  });
  it('raises an error if room is booked', function(){
    meetingRoom.enterRoom();
    expect(function(){meetingRoom.enterRoom(); }).toThrowError("Room is already booked");
  });

  it('can give a name to a meetingroom', function() {
    meetingRoom.roomName(name)
    //spyOn(roomName(name)).andReturn(roomName("room1"));
    expect(meetingRoom.roomName(name)).toBe(name);
    //i dont feel very confident about this test. i found it hard
    //to find argument documentation in jasmine.so i did try to use the
    //jasmine.anything test but it did not seem to work.
  });

});
