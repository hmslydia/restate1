Meteor.methods({ 
  insertHelperRestate: function(params){
    Restates.insert({
      helper_user_id: params.helper_user_id,
      end_time: params.end_time,
      restate_session_id: params.restate_session_id,
      thinker_comment_type: params.thinker_comment_type,
      helper_restate: params.helper_restate,
      
    })
  }, 
  createNewSession: function(params){
    var session_id = RestateSessions.insert({
      thinker_user_id: params.thinker_user_id,
      end_time: params.end_time,
      situation: "",
      thoughts: "",
      feelings: "",
      behaviors: "",
      no_restates_done: 0,
    })
    return session_id
  }, 
  updateThinkerSession: function(params){
    RestateSessions.update({_id:params.restate_session_id},
      {$set: {
        situation: params.situation,
        thoughts: params.thoughts,
        feelings: params.feelings,
        behaviors: params.behaviors,
      }
      }
    )
  },
  incrementRestateCountForSession: function(params){
    RestateSessions.update({_id:params.restate_session_id},
      {$inc: {
        no_restates_done: 1,
      }
      }
    )    
  }
  
  /*
      restate_session_id: self.restateSession._id,
      end_time: getTime(),

      situation: $('#thinker_situation').val(),
      thoughts: $('#thinker_thoughts').val(),
      feelings: $('#thinker_feelings').val(),
      behaviors: $('#thinker_behaviors').val() 
  */
})

addRestateSessions = function(){
  /*
    Temp RestateSeesion 2
    */
  var restateSessionId1 = RestateSessions.insert({
    thinker_user_id: "thinker_a",
    end_time: "",
    situation: "This is my situation",
    thoughts: "These are my thoughts",
    feelings: "These are my feelings",
    behaviors: "These are my behaviors",
    no_restates_done: 2,
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
  
  
  /*
    Temp RestateSeesion 2
    */
  var restateSessionId2 = RestateSessions.insert({
    thinker_user_id: "thinker_b",
    end_time: "",
    situation: "This is my situation",
    thoughts: "These are my thoughts",
    feelings: "These are my feelings",
    behaviors: "These are my behaviors",
    no_restates_done: 1,
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