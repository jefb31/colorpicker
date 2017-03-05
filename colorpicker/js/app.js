
$(document).ready(function(){
    alert('Dom est prêt!');
});

var r, g, b;

var rouge, vert, bleu;



/*var src = $('article img').attr('src');

var elements ='';

for (var i = 0; i < 10; i++){

	elements += '<div class="face">';
	elements += '<div><span></span></div>';
	elements =+ '</div>';

}

// pour recuperer la taille d une face 
var widthFace = $('article').width() /10; // 50px

// pour recuperer chaque face
$('.face').each(function(){
    // recupere sa position au sein de son parent
    var pos = $('article .face').index($(this));
    // calcul du background-position
    var bgPos = pos * widthFace + 'px';
    
    // application du CSS pour chaque élément enfant
    $(this).find('div').css({
        width: widthFace + 'px',
        backgroundImage: 'url('+src+')',
        backgroundPosition: '-'+bgPos+' 0'   
    });
});

// détection de l'evenement change() sur l'input
$('input').change(function(){
    // recup la valeur de l'attribut value
    var width = $(this).val();

    // modification de la taille de article
    $('article').width(width + 'px');

    // recupere la taille d'une face initiale (taille du premier element d'une face)
    widthFaceInitiale = $('article .face div').get(0).width();
    // la taille d'une face en cours
    widthFace = width / 10;
    
    // calcul de l'angle
    var angle = Math.acos(widthFace / widthFaceInitiale) * 180 / Math.PI;
}




// remplacer le contenu de article
$('article').html(elements);

$(function(){
	$("p").mouseenter(function(){

		$(this).css("color", "yellow");
	}

});

// détection de l'evenement change() sur l'input
$('input').change(function(){
    ...

    // pour chaque élément dans une face,
    // on modifie son CSS en ajoutant une rotation sur l'axe Y de la valeur de l'angle
    $('.face div').css({
        transform: 'rotateY('+angle+'deg)'
    });

    // pour chaque élément dans une face IMPAIRE,
    // l'angle est négatif
    $('.face:nth-child(odd) div').css({
        transform: 'rotateY(-'+angle+'deg)'
    });
    
}

// détection de l'evenement change() sur l'input
$('input').change(function(){
    ....
   
    // min et max
    var min = $input.attr('min'); // 500
    var max = $input.attr('max'); // 200
    // delta entre min et max
    var delta = max - min; // 300
    // largeur de article - min
    var width0 = width - min; // entre 0 et 300

    // opacity entre 0 (taille au minimum) et 1 (taille au maximum)
    var opacity = (width0 / 1000) / (delta / 1000);
    // inversion: 0 (taille au maximum) et 1 (taille au minimum)
    opacity = 1 - opacity;

    // application de l'opacite
    $(' .face div span').css({
        opacity: opacity
    });
});

$(".bouton").click(function() { 
    $("#img_" + $(this).attr("id")).toggle();
});
$(".image").click(function() {
    $(this).toggle();
});

function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('rect').style.backgroundColor = '#' + jscolor
}


/*<script>
function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('rect').style.backgroundColor = '#' + jscolor
}
</script>*/