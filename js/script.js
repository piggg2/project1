function check () {
  var name = document.getElementById('name').value
  var name1 = document.getElementById('name1').value
  var name2 = document.getElementById('name2').value
  if (name == null || name == '') {
    alert('You forget to fill them all!')
    return false
  } else if (name1 == null || name1 == '') {
    alert('You forget to fill them all!')
    return false
  } else if (name2 == null || name2 == '') {
    alert('You forget to fill them all!')
    return false
  }
  alert('Submit successful!')
  return true
}
