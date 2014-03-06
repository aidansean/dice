from project_module import project_object, image_object, link_object, challenge_object

p = project_object('dice')
p.domain = 'http://www.aidansean.com/'
p.path = 'dice'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.github_repo_name = 'dice'
p.mathjax = False
p.links.append(link_object(p.domain, 'dice/', 'Live page'))
p.introduction = 'This is another somewhat frivolous script I wrote when playing an RPG game where we did not have enough sets of dice.  It simulates dice rolls with various modes.'
p.overview = '''There are three modes:
<ul>
  <li>Fair dice</li>
  <li>fudge dice</li>
  <li>xkcd dice</li>
</ul>
The fair dice setting is straightforward, the fudge dice have \\([-1,-1,0,0,+1,+1]\\), and the xkcd dice always return \(4\), which is an xkcd in-joke.  The colors can be chosen to match the fudge dice colours we used in the RPG, and since one of our players had OCD and we'd sometimes exchange dice colors to wind him up, there was an option to choose colors randomly.'''

p.challenges.append(challenge_object('Picking random rgb values for the colors means that black is not always the best choice of text color.', 'Add a few lines to see how dark a color is, and change the text to white where suitable.', 'To be done'))

print p.wordpress_text()
