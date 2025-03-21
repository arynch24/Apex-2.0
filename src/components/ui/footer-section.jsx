"use client";
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer
      className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="absolute">
        <div className=" w-[80rem] -mb-[20rem] relative left-15">
          <TextHoverEffect text="A P E X" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:px-18">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center z-1 ">
            <h3 className="mb-4 text-lg font-semibold text-left">Contact Us</h3>
            <address className="space-y-2 text-left text-sm not-italic">
              <p>No 4 Annaporneshwari Layout,</p>
              <p>Near Orion Uptown</p>
              <p>Bengaluru - 560049</p>
              <br></br>
              <p>Phone: +91 6363666309</p>
              <p>Mobile: +91 9844060670</p>
              <br></br>
              <p>Email: nithish@gmail.com</p>
            </address>
          </div>
          <div className="z-1">
            <h3 className="mb-4 text-lg font-semibold ">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Curricullum
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="relative left-20">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              | Terms |
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              | Privacy |
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              | Refund Policy |
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo }