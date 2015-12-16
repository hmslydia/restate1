Template.allSessions.events({
  'click .session_go': function(){
    var self = this
    console.log(this)
    console.log("session_go:"+ this._id)
    Router.go("RestateSession", {session_id: this._id}) 
  },
})



/*
session_go
*/