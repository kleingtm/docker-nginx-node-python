/**
 * Created by tkleingers on 7/22/16.
 */

class Articles {
  constructor() {
    this.retrieve = function(){
        console.info('retrieve!');
    };
  }
}

module.exports = Articles; // exporting class type, not instance