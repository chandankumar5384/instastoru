var arr = [
   {Dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
   {Dp:"https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", Img:"https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
]

var clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id=${idx} src="${elem.Dp}" alt="">
</div>`
})
document.querySelector("#storiyan").innerHTML = clutter

document.querySelector("#storiyan").addEventListener("click", function (dets) {
    document.querySelector("#full-scr").style.display = "block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].Img})`

    setTimeout(function(){

        document.querySelector("#full-scr").style.display = "none"

    }, 2000)
})
