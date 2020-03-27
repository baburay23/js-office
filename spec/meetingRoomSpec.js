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
    expect(function(){meetingRoom.enterRoom(); }).toThrowError(TypeError, "Room is already booked");
  });
});
