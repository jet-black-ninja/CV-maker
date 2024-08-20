import { useState } from "react";
import { v4 } from "uuid";
import {Button} from "./Button"
import {InputWorkExperienceItem} from "./InputWorkExperienceItem";
import {HRline} from "./shared/HR";

function InputWorkExperience({workExperience=[]})