import axios from 'axios';
import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  CommandInteraction,
  EmbedBuilder,
  MessageActionRowComponentBuilder,
} from 'discord.js';
import { ArgsOf, ButtonComponent, Discord, On, Slash, SlashOption } from 'discordx';
import { Constants } from '../constants/constants.js';

let config = {
  headers: {
    'user-agent': Constants.USER_AGENT,
    cookie: `cf_clearance=${process.env.COOKIE}`,
  },
};

const regexNum = /^\d+$/;

@Discord()
class Example {
  @Slash({ description: 'Check NHentai nuke code', name: 'check-nuke' })
  async checkCode(
    @SlashOption({
      description: 'NHentai code',
      name: 'code',
      required: true,
      type: ApplicationCommandOptionType.Integer,
    })
    code: String,
    interaction: CommandInteraction,
  ): Promise<void> {
    axios
      .get(`${Constants.NHENTAI_API}/get?book=${code}`, config)
      .then((res) => {
        const book = res.data.data;
        const embed = new EmbedBuilder()
          .setColor(0x0099ff)
          .setTitle(book.title)
          .setURL(res.data.source)
          .setAuthor({
            name: `${interaction.user.username}#${interaction.user.discriminator}`,
            iconURL: interaction.user.displayAvatarURL(),
          })
          .setDescription(book.optional_title ? book.optional_title.english : 'No optional names.')
          .setThumbnail(Constants.NHENTAI_LOGO)
          .addFields(
            { name: 'Parodies', value: book.parodies ? book.parodies : 'original' },
            { name: 'Characters', value: book.characters.length > 0 ? book.characters.join(', ') : 'original' },
            { name: 'Artists', value: book.artist?.join(', ') },
            { name: 'Tags', value: book.tags.map((tag: string) => `\`${tag}\``).join(', ') },
            { name: 'Favorites', value: book.num_favorites.toString(), inline: true },
            { name: 'Pages count', value: book.num_pages.toString(), inline: true },
            { name: 'Language', value: book.language, inline: true },
          )
          .setImage(book.image[0])
          .setTimestamp()
          .addFields({ name: 'Upload date', value: book.upload_date })
          .setFooter({ text: 'NHentai', iconURL: Constants.NHENTAI_LOGO });

        interaction.reply({ embeds: [embed], ephemeral: true });
      })
      .catch((err) => {
        console.log(err);
        interaction.reply({ content: err.message, ephemeral: true });
      });
  }

  @On({ event: 'messageCreate' })
  async onMessage([message]: ArgsOf<'messageCreate'>) {
    if (message.author.bot || !regexNum.test(message.content)) return false;
    if (parseInt(message.content) < 0 || parseInt(message.content) > 999999) return false;
    const confirmBtn = new ButtonBuilder().setLabel('	|_・)').setStyle(ButtonStyle.Primary).setCustomId('get-nuke');

    const row = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(confirmBtn);

    message.reply({ content: 'Nuke?', components: [row] }).then((msg) => {
      setTimeout(() => msg.edit({ content: 'Nuke?', components: [] }), 60 * 1000);
    });
  }

  @ButtonComponent({ id: 'get-nuke' })
  async confirmBtn(interaction: ButtonInteraction): Promise<void> {
    const codeMessageId = interaction.message.reference?.messageId!;
    const message = await interaction.channel?.messages.fetch(codeMessageId)!;

    axios
      .get(`${Constants.NHENTAI_API}/get?book=${message.content}`, config)
      .then((res) => {
        const book = res.data.data;
        const embed = new EmbedBuilder()
          .setColor(0x0099ff)
          .setTitle(book.title)
          .setURL(res.data.source)
          .setAuthor({
            name: `${message.author.username}#${message.author.discriminator}`,
            iconURL: message.author.displayAvatarURL(),
          })
          .setDescription(book.optional_title ? book.optional_title.english : 'No optional names.')
          .setThumbnail(Constants.NHENTAI_LOGO)
          .addFields(
            { name: 'Parodies', value: book.parodies ? book.parodies : 'original' },
            { name: 'Characters', value: book.characters.length > 0 ? book.characters.join(', ') : 'original' },
            { name: 'Artists', value: book.artist?.join(', ') },
            { name: 'Tags', value: book.tags.map((tag: string) => `\`${tag}\``).join(', ') },
            { name: 'Favorites', value: book.num_favorites.toString(), inline: true },
            { name: 'Pages count', value: book.num_pages.toString(), inline: true },
            { name: 'Language', value: book.language, inline: true },
          )
          .setImage(book.image[0])
          .setTimestamp()
          .addFields({ name: 'Upload date', value: book.upload_date })
          .setFooter({ text: 'NHentai', iconURL: Constants.NHENTAI_LOGO });

        interaction.reply({ embeds: [embed], ephemeral: true });
      })
      .catch((err) => {
        console.log(err);
        interaction.reply({ content: err.message, ephemeral: true });
      });
  }
}
