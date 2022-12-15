# Let's go ahead in Html and learn some tags

# Introduction of audio and video tag

You may have visited many web pages and seen many videos/audio embedded on the web pages. In this article, we will know how we can add video and audio to the web page using Html tags.

\*Let us first see how we embed Video files. \*

## The Video element:

The `<video>` tag is used to add video clips on web pages. Video tags may have one or more video sources of different formats and the browser will pick the first source it supports. If the browser fails to support the video element then it will display the text between the `<video>` and `</video>` tags. Html supports MP4, WebM, and OGG video formats.

### Attributes of video tag:

*   `controls`: This will add basic buttons (such as a play/pause button etc) to the Video content.
    
*   `autoplay`: With this attribute video content will automatically start playing.
    
*   `loop`: Make the video start again every time, whenever it finishes.
    
*   `muted`: By default turned off the sound of video content.
    
*   `preload`: Specifies if and how the video should be loaded when the page loads.
    
*   `poster`: Specifies an image to display while the video is downloading or until the user hits the play button.
    
*   `width`: Used to set the width of video content.
    
*   `height`: Used to set the height of video content.
    
*   `SCR`: To give the URL or path of the video file to embed.
    

\*\* Here is the code of video tags and their attributes.\*\*

```css
<video 
controls 
autoplay 
loop 
muted 
preload="auto" 
poster="pexels-fabian-reitmeier-707915.jpg"
 width="1000" 
height="650" 
src="Pexels Videos 1093662.mp4">
<p>
    Your browser doesn't support this video format. Here is a
    <a href="https://www.pexels.com/video/water-crashing-over-the-rocks-1093662/">link to the video</a> instead.
  </p>
</video>``` 




*Now we will see how to embed audio files.*
## The Audio element:
The `<audio>` tag is very similar to the `<video>` tag, with a few small differences as mentioned below.

- The <audio> tag doesn't support the width/height attributes as there is no visual component.
- The poster attribute is also not required same reason no visual component. 

### Attributes of audio-tag:
The Audio tag has the same attributes Video tag as we discussed above such as `controls` `autoplay` `loop` `muted` `preload` `src`. But the audio tag doesn't include `poster`  `width`  and  ` height` attributes.
** Here is the code of audio tags and their attributes.**
```

```css
**A image demonstrating video and audio embedded on the webpage. **

![Video&audio.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669713630122/cqand3xdz.png align="left")


*Thanks for reading. Happy Learning😇😇*
```