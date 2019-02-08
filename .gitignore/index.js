const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.login('NTQzMTA1MTUwMzExNzI3MTE0.Dz6Etw.rZkrrKYzkKsT2TOGP05xI6Q2Kzk');

client.on('message', message =>{
    if(message.content === "Salut !"){
        message.reply('Bonjour !');
        console.log('Répond à un Joueur');
    }
});

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur !")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
/*Ban*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur !")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Vous ne pouvez pas bannir cette utilisateur")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

if (command === '{prefix}infoserv') {
    let servIcon = message.guild.iconURL;
    let servEmbed = new Discord.RichEmbed()
      .setDescription('Information sur le Bot')
      .setColor('#8a2525')
      .setThumbnai(servIcon)
      .addField('Nom du Serveur', message.guild.name)
      .addField('Nombre total de membre', message.guild.memberCount)
      .addField('Créer le', message.guild.createdAt)
      .addField('Vous avez rejoint le', message.guild.joinedAt)

      return message.channel.send(servEmbed);
      
}
