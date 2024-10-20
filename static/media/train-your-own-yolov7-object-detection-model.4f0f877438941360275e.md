# Train Your Own YoloV7 Object Detection Model

A guide to train YoloV7 model on custom dataset using Python

![Featured Image](../blog_img/yolov7_training/featured_image.png)

## Introduction 
Deep Learning (DL) technologies are now being widely adopted by different organizations that want to improve their services in no time along with great accuracy. Tasks like Image Classification, Voice Recognition, Sentiment Classification, etc., do a substantial job, and human efforts are reduced to a significant percentage.

Object detection is one of the most important concepts in the deep learning space. It is the process of identifying certain objects in an image and correctly classifying them to the respective classes. Models used for this task are called Object Detection Models (ODM), which create a bounding box (rectangular or square box) over the object in an image so that users can directly pay attention to the object they are looking for.

In this article, we are going to focus on the [YoloV7](https://github.com/WongKinYiu/yolov7#performance) model that is created by WongKinYiu and AlexeyAB, who are the original inventor and maintainers of the Yolo architecture. The Yolov7 model is built on top of [Pytorch](https://pytorch.org/) and gives the state-of-the-art performance of the [COCO dataset](https://cocodataset.org/). This YoloV7 model is available in multiple versions like YoloV7, YoloV7-X, YoloV7-W6, YoloV7-E6, YoloV7-D6, and YoloV7-E6E. All these models run between 36–161 frames (with batch size 1) with the image size as 640 or 1280. You can check the performance of the YoloV7 model as compared to other Yolo versions in the below image.

![YoloV7 Model Comparison](../blog_img/yolov7_training/yolo_model_comparison.png)

You can read the official research paper to find out more about the YoloV7 model’s architecture and performance.

In this article, you will see a step-by-step guide to train a YoloV7 model on a custom dataset in the simplest way possible.

## Implementing YoloV7 Model

In this section, you will learn to train a custom object detection model, for which you will see the [Drone Detection Dataset](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) from Kaggle. This dataset comprises multiple images containing drones and annotation files (in txt format) that contain object annotations for the object detection task. But wait, what if you have images for your use case and want to create the custom annotation on your own? Don’t worry; we have got you here. You will also see how to create custom annotations and train the YoloV7 model on that dataset.

For the image annotation, you can use the [LabelImg tool](https://github.com/heartexlabs/labelImg), while [Python 3.9](https://www.python.org/downloads/release/python-390/) and [Google Colab](https://colab.research.google.com/) have been used for the development. The entire code that you are going to develop in this article is based on the [official YoloV7 Repository](https://github.com/WongKinYiu/yolov7).

Read the full article [here](https://medium.com/cometheartbeat/train-your-own-yolov7-object-detection-model-9b21a9e04860). 