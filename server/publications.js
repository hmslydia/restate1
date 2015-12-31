Meteor.publish('restateSessions', function(){
  return RestateSessions.find()
})

Meteor.publish('restateSession', function(session_id){
  return RestateSessions.find({_id:session_id})
})

Meteor.publish('restates', function(session_id){
  return Restates.find({restate_session_id: session_id})
})

Meteor.publish('restatesAll', function(){
  return Restates.find()
})