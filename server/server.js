Meteor.methods({ 
  /*
  addCommentOrTag: function(params){
    params.time = getTime()
    params.user_id = Meteor.userId() || null //Session.get('userId') || null
    addCommentOrTag(params) 
    
  },
  removeComment: function(params){
    params.time = getTime()
    params.user_id = Meteor.userId() || null //Session.get('userId') || null
    removeComment(params) 
    
  },
  addLikert: function(params){
    console.log('addlikert')
    params.time = getTime()
    params.user_id = Meteor.userId() || null //Session.get('userId') || null
    addLikert(params) 
    
  },
  removeLikert: function(params){
    console.log('removelikert')
    params.time = getTime()
    params.user_id = Meteor.userId() || null //Session.get('userId') || null
    removeLikert(params) 
    
  },
  dimAll: function(){
    Comments.update({}, {$set: {saturation: "mid"}}, {multi:true})
  }
  */
})

addRestateSessions = function(){
  var restateSessionId1 = RestateSessions.insert({
    thinker_user_id: "thinker_a",
    end_time: "",
    situation: "This is my situation",
    thoughts: "These are my thoughts",
    feelings: "These are my feelings",
    behaviors: "These are my behaviors",
  })
  
  Restates.insert({
    restate_session_id: restateSessionId1, 
    helper_user_id: "helper_c",
    end_time: "",
    thinker_comment_type: "situation",
    helper_restate: "it sounds like your situation is X."   
  })

  Restates.insert({
    restate_session_id: restateSessionId1, 
    helper_user_id: "helper_c",
    end_time: "",
    thinker_comment_type: "thoughts",
    helper_restate: "it sounds like your are thinking Y."   
  })
  
  var restateSessionId2 = RestateSessions.insert({
    thinker_user_id: "thinker_b",
    end_time: "",
    situation: "This is my situation",
    thoughts: "These are my thoughts",
    feelings: "These are my feelings",
    behaviors: "These are my behaviors",
  })
  
  Restates.insert({
    restate_session_id: restateSessionId2, 
    helper_user_id: "helper_d",
    end_time: "",
    thinker_comment_type: "feelings",
    helper_restate: "it sounds like your are feeling Y.",   
  })
  
  
}



Meteor.startup(function () {	
  if (RestateSessions.find().count() === 0) { 
    addRestateSessions()
  }
})