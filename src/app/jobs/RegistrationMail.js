import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    await Mail.sendMail({
      from: 'José Augusto <joseaugusto@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Boas vindas!',
      html: `Olá, bem vindo!!`
    })
  }
}