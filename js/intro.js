          
;(function($){
   var intro = {
       init:function(){
        var that = this;
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.famliySiteFn();
            
       },
       navFn:function(){
        var $mainBtn = $('#nav .main-btn');
        var $sub = $('#nav .sub');
        var $navUl = $('#nav > ul');
            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');
                    $sub.removeClass('on');
                    $(this).next().addClass('on');
                }
            });
            $navUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            });
       },
       mainSlideFn: function(){
           var $slideWrap = $('#section1 .slide-wrap');
           var $prevBtn = $('#section1 .prev-btn');
           var $nextBtn = $('#section1 .next-btn');
           var cnt = 0;
           
           function mainSlideFn(){
            $slideWrap.stop().animate({left:-800*cnt},600, function(){
                if(cnt>3) cnt=0;
                if(cnt<0) cnt=3;
                $slideWrap.stop().animate({left:-800*cnt},0);
            });
        }
           function nextSlideCountFn(){
               cnt++;
               mainSlideFn();

           }
           $nextBtn.on({
               click:function(){
                if( !$slideWrap.is(':animated')){
                nextSlideCountFn();
                }
               }
           });
           function prevSlideCountFn(){
               cnt--;
               mainSlideFn();
           }
           $prevBtn.on({
               click:function(){
                if( !$slideWrap.is(':animated')){
                    prevSlideCountFn();
                    }
                }
           });
        },

       noticeFn:function(){
        var $modal = $('#modal');
        var $noticeBtn = $('#section2 .notice-btn');
        var $noticeText = $('#modal .notice-text');
        var $content = $('#modal .content');
            $noticeBtn.on({
                click:function(e){
                    e.preventDefault();
                    var tit = $(this).attr('title');
                    $modal.show();
                    $noticeText.text(tit);
                    
                }
            });

            $modal.on({
                click:function(e){
                    e.preventDefault();
                    $(this).hide();
                    $modal.hide();

                }
            });
            $content.on({
                click:function(e){
                    e.stopPropagation();
                }
            });
        },
        galleryFn:function(){   
            var $modalGallery = $('#modalGallery');
            var $galleryBtn = $('#section2 .gallery-btn');
            var $content = $('#modalGallery .content-gallery');
            var n = 0;
            var a = [
                'url(./img/bag1.jpg)',
                'url(./img/bag2.jpg)',
                'url(./img/bag3.jpg)',
                'url(./img/bag4.jpg)' 
            ];
            var len = a.length-1;

                $galleryBtn.each(function(index){
                    $(this).on({
                        click:function(){
                            n=index;
                            $modalGallery.stop().fadeIn(600);
                            conentFn();
                            
                        }
                    });
                });


                function conentFn(){
                    $content.css({'background-image': a[n] }).stop().fadeOut(0).fadeIn(300);             
                }
    


                $content.on({
                    click:function(e){
                        e.stopPropagation();
                        n++; 
                        if(n>len) n=0  
                        conentFn();    
                    }
                });

                $modalGallery.on({
                    click:function(){
                        $modalGallery.stop().fadeOut(600);
                    }
                });

        },
        bannerFn:function(){

        },
        famliySiteFn:function(){

        },
   };
   intro.init();

})(jQuery);

function goFamily(z){
    location.href = z;
 }
function goUrl(z){  

    switch(z){
        case 'noticeMore':
            location.href = "https://www.chanel.com/ko_KR/fashion/news.html";
            break;
    
            //main1
            case 'main1':
                location.href = './main1.html';
                break;
            case 'main1-1':
                location.href = './main1-1.html';
                break;
            case 'main1-2':
                location.href = './main1-2.html';
                break;
            case 'main1-3':
                location.href = './main1-3.html';
                break;
            case 'main1-4':
                location.href = './main1-4.html';
                break;
    
    
                
            //main2
            case 'main2':
                location.href = './main2.html';
                break;
            case 'main2-1':
                location.href = './main2-1.html';
                break;
            case 'main2-2':
                location.href = './main2-2.html';
                break;
            case 'main2-3':
                location.href = './main2-3.html';
                break;
            case 'main2-4':
                location.href = './main2-4.html';
                break;
    
    
    
    
            //main3
            case 'main3':
                location.href = './main3.html';
                break;
            case 'main3-1':
                location.href = './main3-1.html';
                break;
            case 'main3-2':
                location.href = './main3-2.html';
                break;
            case 'main3-3':
                location.href = './main3-3.html';
                break;
            case 'main3-4':
                location.href = './main3-4.html';
                break;
    
    
    
            //main4
            case 'main4':
                location.href = './main4.html';
                break;
            case 'main4-1':
                location.href = './main4-1.html';
                break;
            case 'main4-2':
                location.href = './main4-2.html';
                break;
            case 'main4-3':
                location.href = './main4-3.html';
                break;
            case 'main4-4':
                location.href = './main4-4.html';
                break;
    }  
}  