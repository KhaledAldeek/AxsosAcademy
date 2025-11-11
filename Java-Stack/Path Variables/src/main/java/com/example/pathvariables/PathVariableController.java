package com.example.pathvariables;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PathVariableController {

    @RequestMapping("/{courseId}/{moduleId}")
    public String index(@PathVariable("courseId") String courseId,
                        @PathVariable("moduleId") String moduleId)
    {
        return "Course: "+courseId+", Module: "+moduleId;
    }
}
