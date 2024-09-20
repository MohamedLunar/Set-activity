const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // تعيين النشاط للبوت
    client.user.setActivity('لعب الشطرنج', { type: 'PLAYING' });

    // يمكنك استخدام أنواع أخرى من الأنشطة مثل:
    // client.user.setActivity('مشاهدة فيديو', { type: 'WATCHING' });
    // client.user.setActivity('الاستماع إلى الموسيقى', { type: 'LISTENING' });
    // client.user.setActivity('البث المباشر', { type: 'STREAMING', url: 'https://www.twitch.tv/username' });
});

// تسجيل الدخول باستخدام التوكن
client.login('TOKEN');
