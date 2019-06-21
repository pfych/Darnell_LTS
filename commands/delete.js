module.exports = {
  delete: async (msg) => {
    msg.delete().catch(console.error)
  }
}