/**
 * Group
 * 
 * @author Kevin Lindsey
 * @version 1.0
 * 
 * Copyright (c) 2005-2006, Kevin Lindsey
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 *     - Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 * 
 *     - Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 * 
 *     - Neither the name of this software nor the names of its contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */

/*
 * inheritance
 */
Group.prototype = new Shape();
Group.prototype.constructor = Path;
Group.prototype.superclass = Shape;

/*
 * Constructors
 */

/**
 * Create a new instance of Group
 */
function Group() {
	this._children = [];
}

/*
 * Methods
 */

/**
 * Add the specified child to this group
 * 
 * @param {Shape} child
 */
Group.prototype.addChild = function(child) {
	this._children.push(child);
};

/**
 * @see Shape@draw
 */
Group.prototype.draw = function(renderer) {
	// push transform
	if (this.hasTransform()) {
		renderer.pushTransform(this.transform);
	}
	
	// render children
	for (var i = 0; i < this._children.length; i++) {
		this._children[i].draw(renderer);
	}
	
	// remove transform
	if (this.hasTransform()) {
		renderer.popTransform();
	}
};

/**
 * Remove the specified child to this group
 * 
 * @param {Shape} child
 */
Group.prototype.removeChild = function(child) {
	for (var i = 0; i < this._children.length; i++) {
		var target = this._children[i];
		
		if (target === child) {
			this._children.splice(i, 1);
			break;
		}
	}
};