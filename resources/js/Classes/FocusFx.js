import anime from '../anime.min';

export default class FocusFx {
    constructor(el) {
        this.DOM = {};
        this.DOM.wrapper = el;
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
        anime.remove(this.DOM.wrapper);
        anime.remove(this.DOM.el);
    }

    _in() {
        const self = this;

        anime({
            targets: this.DOM.wrapper,
            duration: 500,
            easing: [0.1,1,0.3,1],
            scale: [1,0.8]
        });
    }

    _out() {
        const self = this;

        anime({
            targets: this.DOM.wrapper,
            duration: 500,
            easing: [0.1,1,0.3,1],
            scale: [0.8,1]
        });
    }
}