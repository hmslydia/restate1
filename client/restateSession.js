Template.restateSession.situationRestate = function() {
    return Restates.find({thinker_comment_type: "situation"}).fetch()
};

Template.restateSession.thoughtsRestate = function() {
    return Restates.find({thinker_comment_type: "thoughts"}).fetch()
};

Template.restateSession.feelingsRestate = function() {
    return Restates.find({thinker_comment_type: "feelings"}).fetch()
};

Template.restateSession.behaviorsRestate = function() {
    return Restates.find({thinker_comment_type: "behaviors"}).fetch()
};

Template.restateSession.events({
  'click #test': function(){
    var self = this
    console.log(this.restateSession)
    
  },
})