-- Create storage bucket for fragrance images
INSERT INTO storage.buckets (id, name, public) VALUES ('fragrance-images', 'fragrance-images', true);

-- Create table for fragrance images
CREATE TABLE public.fragrance_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  fragrance_name TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.fragrance_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public fragrance catalog)
CREATE POLICY "Anyone can view fragrance images" 
ON public.fragrance_images 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert fragrance images" 
ON public.fragrance_images 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update fragrance images" 
ON public.fragrance_images 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete fragrance images" 
ON public.fragrance_images 
FOR DELETE 
USING (true);

-- Create storage policies for fragrance images
CREATE POLICY "Fragrance images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'fragrance-images');

CREATE POLICY "Anyone can upload fragrance images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'fragrance-images');

CREATE POLICY "Anyone can update fragrance images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'fragrance-images');

CREATE POLICY "Anyone can delete fragrance images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'fragrance-images');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_fragrance_images_updated_at
BEFORE UPDATE ON public.fragrance_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();