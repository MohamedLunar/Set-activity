bot.on('ready', () => {
  bot.user.setActivity("?help | Ticket Manager", {type: Watching});
});

//Comments
//You can switch between 3 types of activities (Playing -> 1 | Listening -> 2 | Watching -> 3)
//Activity type must be an INT
//Placeholders must be changed
