getTime = function(){
  return (new Date()).getTime()
}

Router.map(function(){
  this.route('allSessions', { 
    path: '/',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){   
      return [Meteor.subscribe('restateSessions'),
        Meteor.subscribe('restatesAll')
      ]      
    },
    data: function(){
      return {restateSessions: RestateSessions.find().fetch()}
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
     
  })
  this.route('RestateSession', { 
    path: '/RestateSession/:session_id',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){   
      return [Meteor.subscribe('restateSession', this.params.session_id),
        Meteor.subscribe('restates', this.params.session_id)
      ]      
    },
    data: function(){
      return {
        restateSession: RestateSessions.findOne(),
        restates: Restates.find().fetch()
      }
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
     
  }) 
  
  this.route('newSession', { 
    path: '/newSession/:session_id',
    layoutTemplate: 'standardLayout',
    yieldTemplates: {
      'header': {to: 'header'}
    },
    waitOn: function(){   
      return [Meteor.subscribe('restateSession', this.params.session_id),
        Meteor.subscribe('restates', this.params.session_id)
      ]      
    },
    data: function(){
      return {
        restateSession: RestateSessions.findOne(),
        restates: Restates.find().fetch()
      }
    },
    action: function(){
      if(this.ready()){
        this.render()
      }
    }
     
  })    



})

