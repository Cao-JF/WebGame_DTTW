
gdjs.evtsExt__Gamepads__TopDownGamepadMapper = gdjs.evtsExt__Gamepads__TopDownGamepadMapper || {};

/**
 * Behavior generated from Top-down gamepad mapper
 */
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper = class TopDownGamepadMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.GamepadIdentifier = behaviorData.GamepadIdentifier !== undefined ? behaviorData.GamepadIdentifier : Number("1") || 0;
    this._behaviorData.UseArrows = behaviorData.UseArrows !== undefined ? behaviorData.UseArrows : true;
    this._behaviorData.UseLeftStick = behaviorData.UseLeftStick !== undefined ? behaviorData.UseLeftStick : true;
    this._behaviorData.UseRightStick = behaviorData.UseRightStick !== undefined ? behaviorData.UseRightStick : false;
    this._behaviorData.StickMode = behaviorData.StickMode !== undefined ? behaviorData.StickMode : "Analog";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.GamepadIdentifier !== newBehaviorData.GamepadIdentifier)
      this._behaviorData.GamepadIdentifier = newBehaviorData.GamepadIdentifier;
    if (oldBehaviorData.UseArrows !== newBehaviorData.UseArrows)
      this._behaviorData.UseArrows = newBehaviorData.UseArrows;
    if (oldBehaviorData.UseLeftStick !== newBehaviorData.UseLeftStick)
      this._behaviorData.UseLeftStick = newBehaviorData.UseLeftStick;
    if (oldBehaviorData.UseRightStick !== newBehaviorData.UseRightStick)
      this._behaviorData.UseRightStick = newBehaviorData.UseRightStick;
    if (oldBehaviorData.StickMode !== newBehaviorData.StickMode)
      this._behaviorData.StickMode = newBehaviorData.StickMode;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    TopDownMovement: this._behaviorData.TopDownMovement,
    GamepadIdentifier: this._behaviorData.GamepadIdentifier,
    UseArrows: this._behaviorData.UseArrows,
    UseLeftStick: this._behaviorData.UseLeftStick,
    UseRightStick: this._behaviorData.UseRightStick,
    StickMode: this._behaviorData.StickMode,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.TopDownMovement !== undefined)
      this._behaviorData.TopDownMovement = networkSyncData.props.TopDownMovement;
    if (networkSyncData.props.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = networkSyncData.props.GamepadIdentifier;
    if (networkSyncData.props.UseArrows !== undefined)
      this._behaviorData.UseArrows = networkSyncData.props.UseArrows;
    if (networkSyncData.props.UseLeftStick !== undefined)
      this._behaviorData.UseLeftStick = networkSyncData.props.UseLeftStick;
    if (networkSyncData.props.UseRightStick !== undefined)
      this._behaviorData.UseRightStick = networkSyncData.props.UseRightStick;
    if (networkSyncData.props.StickMode !== undefined)
      this._behaviorData.StickMode = networkSyncData.props.StickMode;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getGamepadIdentifier() {
    return this._behaviorData.GamepadIdentifier !== undefined ? this._behaviorData.GamepadIdentifier : Number("1") || 0;
  }
  _setGamepadIdentifier(newValue) {
    this._behaviorData.GamepadIdentifier = newValue;
  }
  _getUseArrows() {
    return this._behaviorData.UseArrows !== undefined ? this._behaviorData.UseArrows : true;
  }
  _setUseArrows(newValue) {
    this._behaviorData.UseArrows = newValue;
  }
  _toggleUseArrows() {
    this._setUseArrows(!this._getUseArrows());
  }
  _getUseLeftStick() {
    return this._behaviorData.UseLeftStick !== undefined ? this._behaviorData.UseLeftStick : true;
  }
  _setUseLeftStick(newValue) {
    this._behaviorData.UseLeftStick = newValue;
  }
  _toggleUseLeftStick() {
    this._setUseLeftStick(!this._getUseLeftStick());
  }
  _getUseRightStick() {
    return this._behaviorData.UseRightStick !== undefined ? this._behaviorData.UseRightStick : false;
  }
  _setUseRightStick(newValue) {
    this._behaviorData.UseRightStick = newValue;
  }
  _toggleUseRightStick() {
    this._setUseRightStick(!this._getUseRightStick());
  }
  _getStickMode() {
    return this._behaviorData.StickMode !== undefined ? this._behaviorData.StickMode : "Analog";
  }
  _setStickMode(newValue) {
    this._behaviorData.StickMode = newValue;
  }
}

/**
 * Shared data generated from Top-down gamepad mapper
 */
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.SharedData = class TopDownGamepadMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Gamepads_TopDownGamepadMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Gamepads_TopDownGamepadMapperSharedData = new gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._Gamepads_TopDownGamepadMapperSharedData;
}

// Methods:
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "Analog");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtsExt__Gamepads__StickRotationValue.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "360°");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtsExt__Gamepads__StickRotationValue.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.common.sign(gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "8 Directions");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "Analog");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtsExt__Gamepads__StickRotationValue.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "360°");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtTools.common.sign(gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "8 Directions");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseArrows();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseLeftStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseRightStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}


gdjs.registerBehavior("Gamepads::TopDownGamepadMapper", gdjs.evtsExt__Gamepads__TopDownGamepadMapper.TopDownGamepadMapper);
