jvm.Map.prototype.moveTo = function(config) {
    console.log('Move', config.dest);


    point = this.latLngToPoint(config.dest[0], config.dest[1]);

    config.x = this.transX - point.x / this.scale;
    config.y = this.transY - point.y / this.scale;

    console.log('transX: ' +  this.transX, 'transY: ' + this.transY);
    console.log('point: ', point);
    console.log('this.scale: ', this.scale, this.baseScale);

  this.goDest(config.x, config.y);
};

/**
 * Move viewpoint to testination
 *  - animated view change
 *
 * @param anchorX
 * @param anchorY
 * @returns {jQuery.Deferred}
 */
jvm.Map.prototype.goDest = function (anchorX, anchorY) {
  var viewportChangeEvent = jvm.$.Event('zoom.jvectormap'),
    interval,
    that = this,
    i = 0,

    // Count scale base
    count = Math.abs(Math.round((scale - this.scale) * 600 / Math.max(scale, this.scale))),

    // Count static based
    count = 30,

    scaleStart,
    scaleDiff,
    transXStart,
    transXDiff,
    transYStart,
    transYDiff,
    transX,
    transY,
    deferred = new jvm.$.Deferred(),
    scale = this.scale;

//  console.log('count', count);

  if (scale > this.params.zoomMax * this.baseScale) {
    scale = this.params.zoomMax * this.baseScale;
  } else if (scale < this.params.zoomMin * this.baseScale) {
    scale = this.params.zoomMin * this.baseScale;
  }

  if (typeof anchorX != 'undefined' && typeof anchorY != 'undefined') {
    zoomStep = scale / this.scale;

    transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2;
    transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2;

  }

  // Start animation
  scaleStart = this.scale;
  scaleDiff = (scale - scaleStart) / count;
  transXStart = this.transX * this.scale;
  transYStart = this.transY * this.scale;
  transXDiff = (transX * scale - transXStart) / count;
  transYDiff = (transY * scale - transYStart) / count;
  interval = setInterval(function () {
//    console.log('count', count, i);
    i += 1;
    that.scale = scaleStart + scaleDiff * i;
    that.transX = (transXStart + transXDiff * i) / that.scale;
    that.transY = (transYStart + transYDiff * i) / that.scale;
    that.applyTransform();
    if (i == count) {
      clearInterval(interval);
      that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
      deferred.resolve();
    }
  }, 25);

  return deferred;
};