/**
 * Handle: easySpoiler
 * Version: 1.2
 * Enqueue: true
 *
 * Author: dyerware
 * Author URI: http://www.dyerware.com
 * Copyright © 2009, 2010, 2011  dyerware
 * Support: support@dyerware.com
 */
 
/////////////////////////////////////////////////////////////////////////////
function wpSpoilerToggle(id, doAnim, showName, hideName, speed, doIframes) 
{
    var myName = id + '_action';
    var b = document.getElementById(myName);
    var e = document.getElementById(id);
        
    if(e.style.display == 'block')
    {
        if (doAnim)
            {jQuery("#" + id).slideUp(speed);}
        else
            {e.style.display = 'none';}
            

        b.nodeValue=showName;
        b.innerText=showName;
        
        if (navigator.userAgent.indexOf("Firefox")!=-1)
        {
        	b.firstChild.nodeValue=showName;
        }
        
    }
    else
    {     
        if (doAnim)
            {jQuery("#" + id).fadeIn(speed);} 
        e.style.display = 'block';
        
	    b.value=hideName;
	    b.innerText=hideName;
        
        if (navigator.userAgent.indexOf("Firefox")!=-1)
        {
        	b.firstChild.nodeValue=hideName;
        }
        
        if (doIframes && doIframes != "false")
       	{
       		jQuery("#" + id).find('iframe').each(function(i) {autoResize(this);});
       		//jQuery("#" + id).find('iframe').each(function(i) {this.src = this.src;});
       	}
    }
    
    return false;
}

/////////////////////////////////////////////////////////////////////////////
function autoResize(iframe)
{
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
    iframe.width = iframe.contentWindow.document.body.scrollWidth;
}

/////////////////////////////////////////////////////////////////////////////
function wpSpoilerHide(id, doAnim, showName, speed) 
{
    var myName = id + '_action';
    var me = document.getElementById(myName);
    var e = document.getElementById(id);
    
    if(e.style.display == 'block')
    {   
        if (doAnim)
            {jQuery("#" + id).slideUp(speed);}
        e.style.display = 'none';
        
        me.value=showName;
        me.innerText=showName;
	        
        if (navigator.userAgent.indexOf("Firefox")!=-1)
        {
        	me.firstChild.nodeValue=showName;
        }
    }
}

/////////////////////////////////////////////////////////////////////////////
function wpSpoilerSelect(objId)
{
    if (document.selection) 
    {
    	document.selection.empty(); 
    }
	else 
	{
		if (window.getSelection)
		{
               window.getSelection().removeAllRanges();
		}
	}
               
	if (document.selection) 
	{
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(objId));
		range.select();
	}
	else if (window.getSelection) 
	{
		var range = document.createRange();
		range.selectNode(document.getElementById(objId));
		window.getSelection().addRange(range);
	}
}
	