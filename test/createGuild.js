'use strict';

const assert = require('assert');
const { token } = require('./auth');
const { Client } = require('../src');

const client = new Client(1);

client.on('ready', async () => {
  try {
    const guild = await client.guilds.create('testing', {
      channels: [
        { name: 'afk channel', type: 'voice', id: 1 },
        { name: 'system-channel', id: 1 },
      ],
      afkChannelID: 0,
      afkTimeout: 60,
      systemChannelID: 1,
    });
    console.log(guild.id);
    assert.strictEqual(guild.afkChannel.name, 'afk channel');
    assert.strictEqual(guild.afkTimeout, 60);
    assert.strictEqual(guild.systemChannel.name, 'system-channel');
    await guild.delete(1);
    client.destroy(1);
  } catch (error) {
    console.error(error);
  }
});

client.login(token).catch(console.error);
