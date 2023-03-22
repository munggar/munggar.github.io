function AllMenu() {   
    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu
        $.each(menu, function(i, data){
            $("#menu").append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h6 class="card-title">Rp. '+ data.harga +'</h6><a href="#" class="btn btn-dark">Pesan Sekarang!</a></div></div></div>');
            // console.log(data);
        })
    })
}

AllMenu();

$('.nav-link').on('click', function () {

    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    
    let kategori = $(this).html();
    $('h1').html(kategori);
    

    if(kategori == 'All Menu') {
        AllMenu();
        return;
    }
    
    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        
        $.each(menu, function(i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h6 class="card-title">Rp. '+ data.harga +'</h6><a href="#" class="btn btn-dark">Pesan Sekarang!</a></div></div></div>';
            }
        });
        $('#menu').html(content);
    });
    // console.log(kategori);
});