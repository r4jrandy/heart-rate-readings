# Heart Rate Exercise

As part of development process for a new heart rate monitor device your comany has been working on, you have been tasked with verifying and ensuring heart rate data accuracy. 

At the moment, all raw heart rate data is being sent through an imaginary data pipeline. The included “heart-rate.json” file is the result of collected heart rate data for a person over several days, after moving through the pipeline and output as JSON. Each node represents the time interval in which the reading was taken (start time and end time) and the beats per minute (bpm). 

While your team is certain each individual heart rate reading is accurate, they want to ensure this is also true for multiple heart rate readings throughout multiple days.
Your task is to build a solution which will process the JSON file and calculate the minimum, maximum and median bpm for each day. 

The output should look something like this:

```json
[
  {
    "date": "03/10/2021",
    "bpm": {
      "min": 67,
      "max": 90,
      "median": 80
    }
  }
  ……,
]
```
Please provide a solution in your preferred modern programming language.

By design, this is a fairly simple exercise, so we're hoping for solutions that reflect what you consider well-factored production-quality code. The best solutions will be elegant, as well as correct. Feel free to pull in any libraries you like.

When you're finished, submit your solution to us as via Github, Gitlab, Bitbucket, etc. link and our team will review it.