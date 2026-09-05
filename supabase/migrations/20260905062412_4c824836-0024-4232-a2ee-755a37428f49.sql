CREATE TABLE public.portfolio (
  id TEXT NOT NULL PRIMARY KEY DEFAULT 'main',
  owner_id UUID,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.portfolio TO anon;
GRANT SELECT, INSERT, UPDATE ON public.portfolio TO authenticated;
GRANT ALL ON public.portfolio TO service_role;

ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolio is publicly viewable" ON public.portfolio FOR SELECT USING (true);

CREATE POLICY "Owner can update portfolio" ON public.portfolio FOR UPDATE TO authenticated
  USING (owner_id IS NULL OR owner_id = auth.uid())
  WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Owner can insert portfolio" ON public.portfolio FOR INSERT TO authenticated
  WITH CHECK (owner_id = auth.uid());

CREATE OR REPLACE FUNCTION public.portfolio_touch_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER portfolio_updated_at BEFORE UPDATE ON public.portfolio
  FOR EACH ROW EXECUTE FUNCTION public.portfolio_touch_updated_at();

INSERT INTO public.portfolio (id, data) VALUES ('main', '{}'::jsonb);