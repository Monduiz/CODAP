
r.define(["Api/util/lang",
		  "Api/util/dom",
		  "Api/util/animate",
		  "Exp/components/views/view"],
    
	function (Lang,
			  Dom,
			  Animate,
			  View) {

		var view = Lang.Declare("CollapsibleView", [View], { 
		
			expanded : false,
		
			constructor : function(options) {
				if (options.collapsible) this.BuildCollapsible(options.collapsible);
			},
			
			Collapse : function(instant) {
				if (!!instant) Animate.Remove(this.domNode, 'WipeV');
				
				else Animate.WipeV(this.domNode, false);
				
				this.emit("viewCollapsed");
				
				this.expanded = false;
			},
			
			Expand : function(instant) {
				if (!!instant) Animate.Remove(this.domNode, 'WipeV');
				
				else Animate.WipeV(this.domNode, true);
				
				this.emit("viewExpanded");
				
				this.expanded = true;
			},
			
			IsCollapsed : function() {
				return !this.expanded;
			},
			
			IsExpanded : function() {
				return this.expanded;
			},
			
			BuildCollapsible : function(collapsible) {
				var cnt = Dom.Create("div", { "className":"ArrowContainer" }, this.domNode);
				var arr = Dom.Create("button", { "className":"Arrow " + collapsible}, cnt);
				
				arr.addEventListener("click", this.onCollapsibleClicked.bind(this));
			},
			
			onCollapsibleClicked : function() {
				this.Collapse(false);
				this.emit("collapsibleClicked");
			}
		})
		
		return view;
	})