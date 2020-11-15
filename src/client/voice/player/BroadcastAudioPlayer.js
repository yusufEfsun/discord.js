'use strict';

const BasePlayer = require('./BasePlayer');
const BroadcastDispatcher = require('../dispatcher/BroadcastDispatcher');

/**
 * An Audio Player for a Voice Connection.
 * @private
 * @extends {BasePlayer}
 */
class AudioPlayer extends BasePlayer {
  constructor(broadcast) {
    super(1);
    /**
     * The broadcast that the player serves
     * @type {VoiceBroadcast}
     */
    this.broadcast = broadcast;
  }

  createDispatcher(options, streams) {
    this.destroyDispatcher(1);
    const dispatcher = (this.dispatcher = new BroadcastDispatcher(this, options, streams));
    return dispatcher;
  }
}

module.exports = AudioPlayer;
