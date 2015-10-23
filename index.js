module.exports = function() {
  console.error.apply(null, arguments)
  process.exit(1)
}
