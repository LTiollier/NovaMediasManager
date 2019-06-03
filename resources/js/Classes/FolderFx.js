import anime from '../anime.min';

export default class FolderFx {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.wrapper = this.DOM.el.querySelector('.folder__icon');
        this.DOM.back = this.DOM.wrapper.querySelector('.folder__icon-img--back');
        this.DOM.cover = this.DOM.wrapper.querySelector('.folder__icon-img--cover');
        this.DOM.feedback = this.DOM.el.querySelector('.folder__feedback');
        this.DOM.preview = this.DOM.el.querySelector('.folder__preview');
        this.DOM.previewElems = this.DOM.preview.children;
        this.totalPreview = this.DOM.previewElems.length;
        this._initEvents();
    }

    _initEvents() {
        const self = this;
        this._mouseenterFn = function() {
            self.intimeout = setTimeout(function() {
                self._removeAnimeTargets();
                self._in();
            }, 75);
        };
        this._mouseleaveFn = function() {
            clearTimeout(self.intimeout);
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.wrapper.addEventListener('mouseenter', this._mouseenterFn);
        this.DOM.wrapper.addEventListener('mouseleave', this._mouseleaveFn);
    }

    _removeAnimeTargets() {
        anime.remove(this.DOM.preview);
        anime.remove(this.DOM.previewElems);
        anime.remove(this.DOM.wrapper);
        anime.remove(this.DOM.cover);
        anime.remove(this.DOM.el);
        if( this.DOM.feedback ) {
            anime.remove(this.DOM.feedback);
            this.DOM.feedback.style.opacity = 0;
        }
        if( this.DOM.letters ) {
            anime.remove(this.DOM.letters);
        }
    }

    _in() {
        const self = this;

        anime({
            targets: this.DOM.previewElems,
            duration: 500,
            easing: [0.1,1,0.3,1],
            translateY: function(t, i, c) {
                const radius = anime.random(110,120);
                return Math.round(radius * Math.sin(2*(i+1)*Math.PI/c)) + 'px';
            },
            translateX: function(t, i, c) {
                const radius = anime.random(110,120);
                return Math.round(radius * Math.cos(2*(i+1)*Math.PI/c)) + 'px';
            },
            rotate: function(t, i, c) {
                return [0,anime.random(-3,3) + 'deg'];
            },
            scale: [0.4,1],
            opacity: {
                value: 1,
                duration: 10,
                easing: 'linear'
            }
        });

        anime({
            targets: this.DOM.wrapper,
            duration: 500,
            easing: [0.1,1,0.3,1],
            scale: [1,0.8]
        });

        anime({
            targets: this.DOM.feedback,
            easing: [0.1,1,0.3,1],
            opacity: [
                {
                    value:1,
                    duration:10
                },
                {
                    value:0,
                    duration:400,
                    delay:50
                }
            ],
            scale: {
                value: [1,7],
                duration: 900
            }
        });
    }

    _out() {
        const self = this;

        anime({
            targets: this.DOM.previewElems,
            duration: 500,
            easing: [0.1,1,0.3,1],
            translateY: 0,
            translateX: 0,
            rotate: 0,
            scale: [1,0.4],
            opacity: {
                value: 0,
                duration: 250,
                delay: 250,
                easing: 'linear'
            }
        });

        anime({
            targets: this.DOM.wrapper,
            duration: 500,
            easing: [0.1,1,0.3,1],
            scale: [0.8,1]
        });
    }
}