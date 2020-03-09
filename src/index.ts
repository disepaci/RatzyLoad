export class RatzyLoad{
	private ratzyAttr:string;
	private observer:IntersectionObserver

	constructor(public callback:Function,public root?:HTMLElement,public options?:IntersectionObserverInit){
		this.ratzyAttr='ratzyLoad-src'
		this.options=options || {
			root:root || null,
			rootMargin:'0px',
			threshold:0
		}

		this.observer=new IntersectionObserver(this.handler.bind(this),this.options)

		this.init()

	}

	private init(){
		window.onload=()=>{
			Array.from(document.querySelectorAll(`img[${this.ratzyAttr}]`)).forEach((item:any) => {
				this.observer.observe(item)
			});
		}
	}

	private handler(entry:any){
		if (entry[0].isIntersecting) {
			var imgUrl=entry[0].target.getAttribute(this.ratzyAttr)
		    entry[0].target.setAttribute('src',imgUrl)
			this.callback(entry)
		}
	}

	addObserver(handler:IntersectionObserverCallback){
		this.observer=new IntersectionObserver(handler,this.options)
	}

}
