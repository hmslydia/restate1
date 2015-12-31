Template.restateSession.helpers({
  situationRestate: function() {
    return Restates.find({thinker_comment_type: "situation"}).fetch()
  },

  thoughtsRestate: function() {
    return Restates.find({thinker_comment_type: "thoughts"}).fetch()
  },

  feelingsRestate: function() {
    return Restates.find({thinker_comment_type: "feelings"}).fetch()
  },

  behaviorsRestate: function() {
    return Restates.find({thinker_comment_type: "behaviors"}).fetch()
  },  
})
  

function submitHelperRestate(thinker_comment_type, thinker_comment_text, self){
  //console.log(self)
  var submissionData = {
    helper_user_id: Meteor.userId(),
    end_time: getTime(),
    restate_session_id: self.restateSession._id,
    thinker_comment_type: thinker_comment_type,
    helper_restate: thinker_comment_text,
  }
  Meteor.call('insertHelperRestate', submissionData, function(){
    console.log("successfully submitted data")
    //console.log(submissionData)
  })  
}

Template.restateSession.events({
  'click #done': function(){
    var self = this
    var submissionData = {
      helper_user_id: Meteor.userId(),
      end_time: getTime(),
      restate_session_id: self.restateSession._id,
    }    
    Meteor.call('incrementRestateCountForSession', submissionData, function(){
      console.log("successfully incremented restate count for session")
      
    }) 
     Router.go("allSessions")   
  },
  
  'click #addSituationRestateButton': function(){
    var UIhandle = "#addSituationRestate"
    var text = $(UIhandle).val()
    $(UIhandle).val("")
    var self = this
    submitHelperRestate("situation", text, self)
  },
  'click #addThoughtsRestateButton': function(){
    var UIhandle = "#addThoughtsRestate"
    var text = $(UIhandle).val()
    console.log(text)
    $(UIhandle).val("")
    var self = this
    submitHelperRestate("thoughts", text, self)
  },
  'click #addFeelingsRestateButton': function(){
    var UIhandle = "#addFeelingsRestate"
    var text = $(UIhandle).val()
    $(UIhandle).val("")
    var self = this
    submitHelperRestate("feelings", text, self)
  },
  'click #addBehaviorsRestateButton': function(){
    var UIhandle = "#addBehaviorsRestate"
    var text = $(UIhandle).val()    
    $(UIhandle).val("")
    var self = this
    submitHelperRestate("behaviors", text, self)
  }
})